const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const newRestuarant = await Restaurant.create({
            name: "Christencia's Kitchen",
            location: "Dallas",
            cuisine: "African"
        })
        expect(newRestuarant).toEqual(expect.objectContaining({
            name: "Christencia's Kitchen",
            location: "Dallas",
            cuisine: "African"
        }))
    });

    test('can create a Menu', async () => {
        // TODO - write test

        const newMenu = await Menu.create({
            title: "Garri and Okra Soup"
        })
        expect(newMenu).toEqual(expect.objectContaining({
            title: "Garri and Okra Soup"
        }))
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const restaurant = await Restaurant.findByPk(1)
        expect(restaurant).toEqual(expect.objectContaining({
            name: "Christencia's Kitchen",
            location: "Dallas",
            cuisine: "African"
        }))
    });

    test('can find Menus', async () => {
        // TODO - write test
        const menus = await Menu.findByPk(1)
        expect(menus).toEqual(expect.objectContaining({
            title: "Garri and Okra Soup"
        }))
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const restaurantToDelete = await Restaurant.findByPk(1)
        const deletedRestaurant = await restaurantToDelete.destroy()
        expect(deletedRestaurant).toEqual(expect.objectContaining(restaurantToDelete))
    });
})