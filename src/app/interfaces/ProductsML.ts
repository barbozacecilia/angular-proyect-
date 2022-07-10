export interface Product{
    id: string,
    site_id?: string,
    title: string,
    category_id?: string,
    price?: number,
    thumbnail?: string,
    available_quantity: number,
    sold_quantity: number,
    condition: string,
}

export interface ResponseProduct{
    site_id:string;
    query?:string;
    results:Product[]
}