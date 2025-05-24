import { Page } from '@playwright/test';



export class SortPages{

private Sort = '.product_sort_container';

private optionA_Z = 'az';
private optionZ_A = 'za';
private optionHightoLow='hilo';
private optionLowtoHigh = 'lohi';


  constructor(private page: Page) {}


async sortItemsAtoZ (){

     const dropdownLocator = this.page.locator(this.Sort);

  await dropdownLocator.selectOption(this.optionA_Z);


}
async sortItemsZtoA (){

     const dropdownLocator = this.page.locator(this.Sort);

  await dropdownLocator.selectOption(this.optionZ_A);


}

async sortItemsHighToLow(){

     const dropdownLocator = this.page.locator(this.Sort);

    await dropdownLocator.selectOption(this.optionHightoLow);


}
async sortItemsLowToHigh(){
     const dropdownLocator = this.page.locator(this.Sort);

    await dropdownLocator.selectOption(this.optionLowtoHigh);

}


}