import {Box} from "@/components/ui/box";
import {Text} from "@/components/ui/text";
import {useLocalSearchParams, useRouter} from "expo-router";
import {getItems} from "@/services/getData";
import {Item} from "@/types";
import {Heading} from "@/components/ui/heading";
import {Image} from "@/components/ui/image";
import {Button, ButtonText} from "@/components/ui/button";
import {HStack} from "@/components/ui/hstack";
import {ArrowLeftIcon, Icon} from "@/components/ui/icon";

const ItemDetailsScreen = () => {
    const { name } = useLocalSearchParams();
    const items: Item[] = getItems();
    const selectedItem = items.find((item: Item) => item.name === name);
    const router = useRouter();

    if(!selectedItem) {
        return <Text>Cet article n'a pas pu être retrouvé</Text>
    }

    return (
        <Box className="py-12 px-4 gap-4">
            <HStack className="gap-4 flex items-center">
                <Button onPress={() => router.back()} variant="link">
                    <Icon as={ArrowLeftIcon} />
                    <ButtonText>retour</ButtonText>
                </Button>
                <Heading>{selectedItem.name}</Heading>
            </HStack>
            {selectedItem.image && <Image source={selectedItem.image} className="w-full h-48 rounded-xl" />}
            <Text>{selectedItem.description}</Text>
        </Box>
    );
};

export default ItemDetailsScreen;
