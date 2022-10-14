import { faker } from "@faker-js/faker";
import { SearchEmployerDto } from "src/interfaces/employers/employer";

export class EmployersMock  {
    emloyersData = this.generateEmployerData();
    constructor(){

    }

    generateEmployerData(itemsCount = 100): SearchEmployerDto[] {
        const items = [] as SearchEmployerDto[];
        for (let i = 0; i < itemsCount; ++i) {
          items.push({
              id: faker.datatype.uuid(),
              name: faker.name.fullName(),
              email: faker.internet.email(),
              hourRate: +faker.helpers.arrayElement([2, 3, 5, 2]),
              overtimeHourRate: +faker.helpers.arrayElement([2, 13, 1, 2]),
              totalClock: +faker.helpers.arrayElement([8, 10, 13, 9]),
              totalAmount: +faker.helpers.arrayElement([1234, 34123, 3132, 1233]),
              totalOverTimeAmout: +faker.helpers.arrayElement([1000, 2000, 3000, 4000]),
          });
        }
        return items;
      }

      getData(currPage: number, size: number): SearchEmployerDto[] {
        const trimStart = (currPage-1) * size;
        const trimEnd = trimStart + size;
        return this.emloyersData.slice(trimStart, trimEnd);
      }
}