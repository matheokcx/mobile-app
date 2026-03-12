import {Box} from "@/components/ui/box";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";

const AddItemScreen = () => {
    return (
        <Box className="p-6">
            <VStack className="bg-white rounded-xl p-6">
                <Heading>Ajouter un item à la liste:</Heading>

            </VStack>
        </Box>
    );
};

export default AddItemScreen;
