import "./styles.css";
import definePlugin from "@utils/types";
import { settings } from "./settings";
import { Devs } from "@utils/constants";
import { renderGroupDMsButton } from "./components/GroupDMsButton";

export default definePlugin({
    name: "TBD",
    description: "TBD",
    authors: [Devs.author],
    settings,

    patches: [
        {
            find: ".friendsButtonContainer",
            replacement: [
                {
                    match: /(children:\[)([^\]]+)(\])/,
                    replace: "$1$2, $self.renderGroupDMsButton()$3"
                }
            ]
        }
    ],

    renderGroupDMsButton
});