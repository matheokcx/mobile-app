import {ScrollView} from "react-native";
import {Item} from "@/types";
import {getItems} from "@/services/getData";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import ItemCard from "@/components/Cards/Item/ItemCard";
import {useEffect, useState} from "react";
import {Box} from "@/components/ui/box";
import {Skeleton, SkeletonText} from "@/components/ui/skeleton";

const Home = () => {
  const [items, setItems] = useState<Item[] | null>(null);
  setTimeout(setItems, 5000, getItems());

  return (
    <ScrollView className="p-6">
      <VStack className="bg-white rounded-xl p-6 gap-8">
          <Heading>Liste des produits de l'applications:</Heading>
          {items ? items.map((item, index) => <ItemCard key={index} item={item} />) : Array.from({length: 5}).map((_, index: number) => (
              <Box key={index} className="bg-gray-400 p-6 rounded-2xl gap-4">
                  <Skeleton variant="rounded" className="h-24" />
                  <SkeletonText className="w-3/5 h-2" />
                  <SkeletonText className="w-1/5 h-2" />
              </Box>
          ))}
      </VStack>
    </ScrollView>
  );
};

export default Home
