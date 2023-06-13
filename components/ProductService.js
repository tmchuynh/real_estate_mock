export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                address: '123 Main, Suite 330, Boston, MA 02111-1307',
                price: 1323,
                baths: 2,
                beds: 3,
                sqft: 1523,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/CA/Orange/2759-N-Chauncey-Ln-92867/home/4325595',
              },
              {
                id: '1001',
                address: '456 Elm St, Apt 205, New York, NY 10001',
                price: 2200,
                baths: 1,
                beds: 1,
                sqft: 1000,
                isJaylinFriendly: 'false',
                status: 'contacted',
                url: 'https://www.redfin.com/NY/New-York/456-Elm-St-10001/home/1234567',
              },
              {
                id: '1002',
                address: '789 Oak Ave, San Francisco, CA 94110',
                price: 3500,
                baths: 3,
                beds: 2,
                sqft: 2000,
                isJaylinFriendly: 'true',
                status: 'viewing scheduled',
                url: 'https://www.redfin.com/CA/San-Francisco/789-Oak-Ave-94110/home/9876543',
              },
              {
                id: '1100',
                address: '123 Maple Rd, Chicago, IL 60601',
                price: 1800,
                baths: 1,
                beds: 1,
                sqft: 800,
                isJaylinFriendly: 'false',
                status: 'application sent',
                url: 'https://www.redfin.com/IL/Chicago/123-Maple-Rd-60601/home/2468135',
              },
              {
                id: '1199',
                address: '567 Pine St, Seattle, WA 98101',
                price: 2500,
                beds: 2,
                baths: 2,
                sqft: 1100,
                isJaylinFriendly: 'true',
                status: 'new',
                url: 'https://www.redfin.com/WA/Seattle/567-Pine-St-98101/home/9876543',
              },
        ]
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }
};

