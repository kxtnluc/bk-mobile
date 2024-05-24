import { BookObj, SimpleBookObj } from "@/types/KeepTypes"
import api from "./baseManager"

const _apiUrl = "/api/keep"

export async function getKeep(): Promise<Array<BookObj>> {
  try {
    const { data } = await api.get<Array<BookObj>>(_apiUrl); // Use the api instance to make the request
    return data;
  } catch (error) {
    console.error("Error fetching keeps:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export async function getKeepSimple(): Promise<Array<SimpleBookObj>> {
  try {
    const { data } = await api.get<Array<SimpleBookObj>>(_apiUrl+"?simple=true"); // Use the api instance to make the request
    return data;
  } catch (error) {
    console.error("Error fetching keeps:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export async function getBookById(bookid:number): Promise<BookObj> {
  try {
    const {data}  = await api.get(_apiUrl+'/'+bookid); // Use the api instance to make the request
    return data;
  } catch (error) {
    console.error("Error fetching keeps:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
