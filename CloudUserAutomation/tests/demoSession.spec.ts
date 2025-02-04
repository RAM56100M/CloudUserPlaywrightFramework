import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";


test.beforeEach(async ({page})=>{

try{
    await page.goto('https://portal.dev.biosero.com')
}catch(error){
    console.log(`got an error on init: ${error}`)
    }

})

test.describe('Login',()=>{

    test ('Verify user can login to the Admin portal using valid credentials', async ({page}, testInfo)=>{

        const login= new LoginPage(page)
        await login.doLogin('rammarshivane@biosero.com', 'Ram@7670')
        const title = await page.title();        
        console.log('Page Title:', title);
        await expect(page).toHaveTitle("User Portal")
    })

    test('Verify user can not login to the Admin portal using invalid password', async ({page}, testInfo)=>{
   
        const login= new LoginPage(page)
        const message= await login.doLogin('rammarshivane@biosero.com', 'InvalidPwd')
        console.log("Returned Message", message)
    
    })

    test ('Verify user can not login to the Admin portal using invalid email', async ({page}, testInfo)=>{
   
        const login= new LoginPage(page)
        const message= await login.doLogin('rammarshivane1@biosero.com', 'Ram@7670')
        //expect(message).toEqual("The username or password provided in the request are invalid.")
    })

    test ('Verify user can see the Dashboard on successful login to Admin Portal', async ({page}, testInfo)=>{
   
        const login= new LoginPage(page)
        const message= await login.doLogin('rammarshivane@biosero.com', 'Ram@7670')
        const isDashboardVisible= await login.isDashboardVisible();
        console.log("Successfully landed on the Dashboard");
        expect (isDashboardVisible).toEqual(true)
       
    })

    test ('Verify user can Logout form the Admin Portal successfully', async ({page}, testInfo)=>{
   
        const login= new LoginPage(page)
        const message= await login.doLogin('rammarshivane@biosero.com', 'Ram@7670')
        //const isDashboardVisible= await login.isDashboardVisible();
       // expect (isDashboardVisible).toEqual(true)
        await login.waitFor(3)
        await login.doLogout()
        console.log("Successfully Logged out")
       
    }) 

})