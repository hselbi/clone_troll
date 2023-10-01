import { create } from 'zustand'
import {getTodosGroupByColumn} from '@/lib/getTodosGroupByColumn'

interface BoardState {
  board: Board;
  getBoard:() => void;

}
export const useBoardStore = create((set) => ({
  bears: {
    columns: new Map<TypeColumn, Column>()
  },
  getBoard: async() => {
    const board = await getTodosGroupByColumn();
    set({board})
  }
}))