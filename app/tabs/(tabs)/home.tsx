import {ScrollView} from "react-native";
import {Item} from "@/types";
import {getItems} from "@/services/getData";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import ItemCard from "@/components/Cards/Item/ItemCard";

const Home = () => {
  const items: Item[] = getItems();

  return (
    <ScrollView className="p-6">
      <VStack className="bg-white rounded-xl p-6 gap-8">
          <Heading>Liste des produits de l'applications:</Heading>
          {items.map((item, index) => <ItemCard key={index} item={item} />)}
      </VStack>
    </ScrollView>
  );
};

export default Home
