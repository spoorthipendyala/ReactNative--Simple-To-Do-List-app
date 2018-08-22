import React from "react";
import HomeContainer from './HomeContainer';
import renderer from "react-test-renderer";
  describe("Home Component", () => {
    
      it("dummy test", () => {
        expect(true).toBe(true)
      });
      it("dummy test is going to fail", () => {
        expect(true).toBe(false)
      });
});