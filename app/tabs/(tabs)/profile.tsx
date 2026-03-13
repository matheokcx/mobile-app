import {Box} from "@/components/ui/box";
import {Text} from "@/components/ui/text";
import {VStack} from "@/components/ui/vstack";
import {Avatar, AvatarBadge, AvatarFallbackText, AvatarImage} from "@/components/ui/avatar";
import {useState} from "react";
import {getMe} from "@/services/authService";
import {Profile} from "@/types";
import { Heading } from "@/components/ui/heading";

const ProfileScreen = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    setTimeout(setProfile, 3000, getMe());

    if(!profile){
        return <Text>Vous devez être connecté</Text>;
    }

    return (
        <Box className="p-4">
            <VStack className="p-4 gap-6 items-center">
                <Avatar size="2xl">
                    <AvatarFallbackText>{profile.fullName}</AvatarFallbackText>
                    {profile.image && <AvatarImage source={{uri: profile.image}} />}
                    <AvatarBadge />
                </Avatar>
                <Box className="items-center">
                    <Heading>{profile.fullName}</Heading>
                    <Text className="opacity-55">{profile.sexe}</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default ProfileScreen;
