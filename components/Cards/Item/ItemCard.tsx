import {Item} from "@/types";
import {Box} from "@/components/ui/box";
import {Text} from "@/components/ui/text";
import {Heading} from "@/components/ui/heading";
import {Image} from "@/components/ui/image";

type ItemCardProps = {
    item: Item;
};

const ItemCard = ({item}: ItemCardProps) => {
    return (
        <Box className="bg-blue-400/40 p-6 rounded-2xl gap-2">
            {item.image && <Image source={item.image} className="w-full rounded-md"/>}
            <Heading>{item.name}</Heading>
            <Text>{item.price}€</Text>
        </Box>
    );
};

export default ItemCard;
