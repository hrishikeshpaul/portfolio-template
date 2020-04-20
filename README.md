# Portfolio Template

This is a simple personal website template for people who want a simple personal website. This template is currently filled with my data, but one can replate it with theirs without much hastle. Furthermore, this is mobile compatible. Below I have mentioned the steps to get this on your system, and deploy it.

![](assets/one.png)
![](assets/two.png)
![](assets/three.png)
![](assets/four.png)


## Project Setup

This template is built using vuejs. Below are the steps to get the project up and running.

### Dependencies
1. npm
2. git

### Steps
```
git clone https://github.com/hrishikeshpaul/portfolio-template.git
```
```
cd portfolio-template
```
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Editing Information

Edit the `info.js` file, and input your own data. All the images should go in the `src/assets` folder. 

> To change the title (the one that appears on the tabs), navigate to `public/index.html` and change the title there.

### Emailjs (Contact Form)

The **contact** section of the template makes use of this API called [emailjs](https://www.emailjs.com/). It is a good service that provides 200 email free every month. You will need to configure your own emailjs account for the service to work.

1. Head over to [emailjs](https://www.emailjs.com/) and create your account.
2. Once logged in, select a service. In my case I selected **gmail**.
3. Head over to **Email Templates** on the side and click on **Email Template Example**. Here, there are few changes to be made if you don't want to change the template's javascript code.
    - Change the subject attribute to: `New message from {{from_name}}!`
    - Change the body to, 
    ```js
    Hello {{to_name}},

    You got a new message from {{from_name}}:

    {{{message_html}}}

    My contact is: {{user_email}}.
    ```
    You can configure this however you want, but the attributes in the `{{ }}` need to be those.
4. Create a file called `config.js` in the root of the project. You'll notice that the `.gitignore` has the name of this file. This is where all the data that links your web app to emailjs will be stores.
5. Create a object that looks like this,
   ```js
   let config = {
        emailjs: {
            serviceID: '<serviceID>',
            templateID: '<templateID>',
            userID: '<userID>'
        }
    }

    export default config;
   ```
6. You need to get the above mentioned IDs from your emailjs account,
   - **serviceID**: From `Email Services`
   - **templateID**: From `Email Templates`
   - **userID**: From `Account` > `API Keys`

## Deployment

To get this deployed as a github page, follow the steps below,

1. Create a repository with this format: `<github_username>.github.io` (Ex: hrishikeshpaul.github.io). Doesn't matter if it's private or not.

2. Navigate to the folder on your computer and run the command `npm run build`. This will create a folder called `dist` (if you already have it, it will overwite it).

3. Take the contents of the `dist` folder and upload it onto the github repository you just created.

4. In your repository (<github_username>.github.io), go to the `Settings` Tab and scroll to **GitHub Pages**.

5. Click on the **source** dropdown, and select **master**.

6. Wait for a while, and then nagivate to `<github_username>.github.io` on your browser, and you should see your webisite up and running.

# Notes

Please feel free to post any issue if found, or mail me at hrpaul@iu.edu.
