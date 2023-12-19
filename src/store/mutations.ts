import type { MutationTree } from "vuex";
import type { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
  setModal(state, mode) {
    state.isModal = mode;
  },
};
