import {LocatorScreenshotOptions, type Locator, type Page } from '@playwright/test';

export class Products {

    overview: {
        label: {
            allProducts: Locator
            ,price: (index: number) => Locator
            ,name: (index: number) => Locator
            ,overlayPrice: (index: number) => Locator
            ,overlayName: (index: number) => Locator
        }
        ,button: {
            addToCart: (index: number) => Locator
            ,viewProduct: (index: number) => Locator
            ,overlayAddToCart: (index: number) => Locator
        }
    }

    details: {
        label: {
            mewArrival: Locator
            name: Locator
            ,category: Locator
            ,price: Locator
            ,availability: Locator
            ,condition: Locator
            ,brand: Locator
        }
        ,button: {
            addToCart: Locator
        }
        ,input: {
            quantity: Locator
        }
    }

    review: {
        input: {
            name: Locator
            ,email: Locator
            ,review: Locator
        }
        button: {
            submit: Locator
        }
    }

    constructor(page: Page) {
        this.overview = {
            label: {
                allProducts: page.locator('div.features_items > h2')
                ,price: (index) => page.locator(`div.features_items > div:nth-child(${index + 3}) div.productinfo > h2`)
                ,name: (index) => page.locator(`div.features_items > div:nth-child(${index + 3}) div.productinfo > p`)
                ,overlayPrice: (index) => page.locator(`div.features_items > div:nth-child(${index + 3}) div.overlay-content > h2`)
                ,overlayName: (index) => page.locator(`div.features_items > div:nth-child(${index + 3}) div.overlay-content > p`)
            }
            ,button: {
                addToCart: (index) => page.locator(`div.features_items a[data-product-id="${index}"]`)
                ,viewProduct: (index) => page.locator(`div.features_items a[href="/product_details/${index}"]`)
                ,overlayAddToCart: (index) => page.locator(`div.overlay-content > a[data-product-id="${index}"]`)
            }
        }

        this.details = {
            label: {
                mewArrival: page.locator('img.newarrival')
                ,name: page.locator('div.product-information > h2')
                ,category: page.locator('div.product-information > p:nth-child(3)')
                ,price: page.locator('div.product-information > span > span')
                ,availability: page.locator('div.product-information > p:nth-child(6)')
                ,condition: page.locator('div.product-information > p:nth-child(7)')
                ,brand: page.locator('div.product-information > p:nth-child(8)')

            }
            ,input: {
                quantity: page.locator('div.product-information > span > input')
            }
            ,button: {
                addToCart: page.locator('div.product-information > span > button')
            }
        }
    }
}