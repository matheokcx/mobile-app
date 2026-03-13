import {Item} from "@/types";
import {Box} from "@/components/ui/box";
import {Text} from "@/components/ui/text";
import {Heading} from "@/components/ui/heading";
import {Image} from "@/components/ui/image";
import {Pressable} from "@/components/ui/pressable";
import {useRouter} from "expo-router";

type ItemCardProps = {
    item: Item;
};

const ItemCard = ({item}: ItemCardProps) => {
    const router = useRouter();

    return (
        <Pressable onPress={() => router.navigate({pathname: `/item/[name]`, params: { name: item.name }})}>
            <Box className="bg-blue-400/40 p-6 rounded-2xl gap-2">
                {item.image && <Image source={item.image} className="w-full rounded-md"/>}
                <Heading>{item.name}</Heading>
                <Text>{item.price}€</Text>
            </Box>
        </Pressable>
    );
};

export default ItemCard;
