import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    enableButton: {
        type: OptionType.BOOLEAN,
        description: "Enable Group DMs Button",
        default: true
    }
});