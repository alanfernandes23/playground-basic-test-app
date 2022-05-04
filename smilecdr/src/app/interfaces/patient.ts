export interface Patient {
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    gender?: string;
    address?: string;
    phoneNumber?: string;
}

export interface Meta {
    lastUpdated: Date;
}

export interface Link {
    relation: string;
    url: string;
}

export interface Meta2 {
    versionId: string;
    lastUpdated: Date;
    source: string;
}

export interface Extension {
    url: string;
    valueBoolean: boolean;
}

export interface Coding {
    system: string;
    code: string;
    display: string;
}

export interface Type {
    coding: Coding[];
    text: string;
}

export interface Identifier {
    use: string;
    type: Type;
    system: string;
    value: string;
}

export interface Text {
    status: string;
    div: string;
}

export interface Name {
    family: string;
    given: string[];
    use: string;
    text: string;
}

export interface Telecom {
    system: string;
    value: string;
    use: string;
}

export interface Address {
    line: string[];
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface Resource {
    resourceType: string;
    id: string;
    meta: Meta2;
    extension: Extension[];
    identifier: Identifier[];
    text: Text;
    name: Name[];
    gender: string;
    birthDate: string;
    deceasedDateTime?: Date;
    telecom: Telecom[];
    address: Address[];
}

export interface Search {
    mode: string;
}

export interface Entry {
    fullUrl: string;
    resource: Resource;
    search: Search;
}

export interface RootObject {
    resourceType: string;
    id: string;
    meta: Meta;
    type: string;
    total: number;
    link: Link[];
    entry: Entry[];
}