import {ADD_WORKER, DELETE_WORKER, Workers} from "./actions";

export class NagWorker {
  constructor(public name: string,
              public dept: string,
              public age: number) {
  }

  toString() {
    return this.name + this.dept + this.age;
  }
}

export interface WorkersPageState {
  currentWorkers: NagWorker[]
}

const initialState: WorkersPageState = {
  currentWorkers: [
    new NagWorker("Christophe", "Software Engineering", 35),
    // new NagWorker("Artur", "Software Engineering Intern", 17),
    // new NagWorker("Sandrine", "Software Engineering", 25),
    // new NagWorker("Christoph", "Software Engineering", 27),
    // new NagWorker("Martin", "Client Team", 44),
  ]
};

export function workersFormReducer(
  state: WorkersPageState = initialState,
  action: Workers
) {
  console.log("started dispatching")
  console.log("current action: " + action.payload)
  switch (action.type) {
    case ADD_WORKER:
      return {
        ...state,
        currentWorkers: [...state.currentWorkers, action.payload]
      };
    case DELETE_WORKER:
      console.log("delete workers started")
      let brandNewArray = [];
      let oldArray = state.currentWorkers;
      for (let currentWorker of oldArray) {
        if (currentWorker.toString() !== action.payload.toString()) {
          brandNewArray.push(currentWorker);
          console.log(brandNewArray)
        }
      }
      return {
        ...state,
        currentWorkers: brandNewArray
      }
    case "INIT_WORKERS":
      return {
        ...state,
        currentWorkers: action.payload
      }
    default:
      return state
  }
}















