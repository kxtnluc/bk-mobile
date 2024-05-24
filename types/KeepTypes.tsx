export type BookObj = {
    id: number;
    googleBookPin: string;
    ISBN_10: number;
    ISBN_13: number;
    author: string;
    title: string;
    subTitle: string;
    description: string;
    imageUrl?: string;
    popularQuote: string;
    year: number;
    pageCount: number;
    textSize: number;
    complexity: number;
    views: number;
    averageRating: number;
    reviews: Array<any>;
}

export type SimpleBookObj = {
    id: number;
    ISBN_10: number;
    author: string;
    title: string;
    subTitle: string;
    imageUrl?: string;
}

export type UserBookObj = {
    id: number;
    userId: number;
    keepId: number;
    percentRead: number;
}

