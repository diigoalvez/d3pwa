export interface Type {
    twoHanded: boolean;
    id: string;
}

export interface Primary {
    textHtml: string;
    text: string;
}

export interface Secondary {
    textHtml: string;
    text: string;
}

export interface Attributes {
    primary: Primary[];
    secondary: Secondary[];
    other: any[];
}

export interface OneOf {
    textHtml: string;
    text: string;
}

export interface RandomAffix {
    oneOf: OneOf[];
}

export interface ItemDisplayModel {
    id: string;
    slug: string;
    name: string;
    icon: string;
    tooltipParams: string;
    requiredLevel: number;
    stackSizeMax: number;
    accountBound: boolean;
    flavorText: string;
    flavorTextHtml: string;
    typeName: string;
    type: Type;
    damage: string;
    dps: string;
    damageHtml: string;
    color: string;
    isSeasonRequiredToDrop: boolean;
    seasonRequiredToDrop: number;
    slots: string[];
    attributes: Attributes;
    randomAffixes: RandomAffix[];
    setItems: any[];
}