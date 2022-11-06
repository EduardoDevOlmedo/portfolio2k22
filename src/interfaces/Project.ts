import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };

export interface  Project  {
    Icon:  Icon;
    title: string;
    description: string;
    url: string;
}


export interface ProjectScreen extends Project {
    iconClassNames: string[];
    images: string[];
    repoUrl: string;
    shouldContain?: boolean;
}

export interface ProjectLinks {
    url: string;
    Icon: Icon
}


