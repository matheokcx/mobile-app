import {Box} from "@/components/ui/box";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {FormControl, FormControlLabel, FormControlLabelText} from "@/components/ui/form-control";
import {Input, InputField} from "@/components/ui/input";
import {Button, ButtonText} from "@/components/ui/button";
import {useState} from "react";
import {Item} from "@/types";
import {addItem} from "@/services/addData";
import {useRouter} from "expo-router";

const AddItemScreen = () => {
    const router = useRouter();

    const [info, setInfo] = useState<Item>({
        name: "",
        price: 0
    });

    const handleAddItem = (): void => {
        addItem([], info);
        router.push("/tabs/home");
    };

    return (
        <Box className="p-6">
            <VStack className="bg-white rounded-xl p-6 gap-6">
                <Heading>Ajouter un item à la liste:</Heading>
                <FormControl className="gap-4">
                    <FormControlLabel>
                        <FormControlLabelText>Nom de l'article</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField type="text"
                                    placeholder="Nom de l'article"
                                    value={info.name}
                                    onChangeText={(newValue) => setInfo({ ...info, name: newValue })}
                        />
                    </Input>
                    <FormControlLabel>
                        <FormControlLabelText>Prix de l'article</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField type="text"
                                    placeholder="Prix de l'article"
                                    value={info.price.toString()}
                                    onChangeText={(newValue) => setInfo({ ...info, price: Number(newValue) })}
                        />
                    </Input>
                    <Button onPress={handleAddItem}>
                        <ButtonText>Ajouter</ButtonText>
                    </Button>
                </FormControl>
            </VStack>
        </Box>
    );
};

export default AddItemScreen;
