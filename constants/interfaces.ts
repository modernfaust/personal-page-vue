export interface NavigationItems {
    github:string,
    linkedIn:string,
    resume:string,
}

export interface HeroItem {
    image:string,
    alt:string,
    header:string,
    subheader:string,
    description:string,
}

export interface Feature {
    image:string,
    header:string,
    subheader:string,
    description:string,
}

export interface ExperienceItem {
    image:string,
    alt:string,
    companyName:string,
    url:string,
    date:string,
    position:string,
    description:Array<string>,
}

export interface ProjectItem {
    image:string,
    alt:string,
    projectName:string,
    date:string,
    languages:Array<string>,
    description:Array<string>,
}