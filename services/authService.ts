import {Profile} from "@/types";

export function getMe(): Profile {
    return {
        email: "matheo.deleplanque@primever.com",
        fullName: "Deleplanque Mathéo",
        sexe: "Male",
        image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/0ba9b2528420781bb77b81c88375f3f2cf01eb09"
    };
}
