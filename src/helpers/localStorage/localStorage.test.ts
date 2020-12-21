import { getDarkValue, getItem, setItem, setDarkValue } from "./localStorage"

interface LocalStorage {
  [key: string]: string;
}

let ls: LocalStorage = {}
const localStorageMock = () => {}
Object.defineProperty(window, "localStorage", {
  value: {
    setItem: (key: string, value: string | number) => {
      ls[key] = value.toString()
    },
    getItem: (key: string) => {
      return ls[key] || null
    },
    removeItem: (key: string) => {
      delete ls[key]
    },
    clear: () => {
      ls = {}
    },
  },
})

describe("Test all local storage functions", () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  describe("Given a setItem function", () => {
    describe("when it is called", () => {
      it("should add data to localStorage in window", () => {
        setItem("foo", "bar")
        expect(window.localStorage.getItem("foo")).toEqual("bar")
      })
    })
  })
  describe("Given a getItem function", () => {
    describe("when it is called", () => {
      it("should get data from localStorage of window", () => {
        window.localStorage.setItem("foo", "bar")
        expect(getItem("foo")).toEqual("bar")
      })
    })
  })
  describe("Given a setDarkValue function", () => {
    describe("when it is called", () => {
      it("should change the value of dark in localStorage in window", () => {
        setDarkValue(true)
        expect(window.localStorage.getItem("dark")).toEqual("true")
      })
    })
  })
  describe("Given a getDarkValue function", () => {
    describe("when it is called", () => {
      it("should change the value of dark in localStorage in window", () => {
        window.localStorage.setItem("dark", "true")
        expect(getDarkValue()).toEqual(true)
      })
    })
  })
})
