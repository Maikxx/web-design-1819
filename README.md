# Web Design

[🚀 Demo 🚀](https://web-design-maikel.netlify.com/).

## Disclaimer

For privacy reasons I choose not to publish Marijns full name in this repository. Even if I knew he would be fine with it, I wouldn't be since no one has anything to do with him except us.

## Table of Contents

1. [Exercises](#Exercises)
    * [Exercises Week 1](#exercises-week-1)
    * [Exercises Week 2](#exercises-week-2)
2. [Review sessions](#review-session)
    * [Week 1](#review-session-week-1)
    * [Week 2](#review-session-week-2)
    * [Week 3](#review-session-week-3)
3. [Process](#Process)
4. [Project tips](#Project-tips)
5. [Sources](#Sources)
6. [License](#License)

## Exercises

### Exercises Week 1

During this excersise we had to focus on the following points in our newly designed accessible tools:

* Study Situation
* Ignore Conventions
* Prioritise Identity
* Add Nonsense

These all fall under the *Exclusive Design Principles*.

I received the excersise of Marijn, who uses his keyboard for everything on the web.

I choose to take a shot at the **date picker**.

When researching accessible date pickers, I found that it is a pretty known theme in the community.
Despite being pretty known in the community, several large Dutch websites have varying implementations of the date picker:

* [NS](https://www.ns.nl) for example has a very decent and accessible date picker for choosing a departure date.

    In this date picker you can navigate the dates with the arrow keys, also enabling the user to navigate multiple months by just pressing the down key.

    The only negative things I can find about this implementation is that you can not target the 'switch months' buttons at the top of the date picker with the tab keys.

    ![NS Example](./docs/ns_example.png)

* [9292](https://www.9292.nl). This date picker is very similar to the date picker from the NS, with the subtle difference that you don't see in the pop-up window when you navigate beyond the current month.

    You can also not navigate to any other day in the week when navigating beyond the scope of the pop-up window.

    I consider this implementation to be very bad, since it just doesn't do everything that I would want in this functionality.

    ![9292 Example](./docs/9292_example.png)

More things that I have noticed about these date pickers, is that they are mainly built using JQuery and JQuery UI, which means they (probably) are built a pretty long time ago.

Examples of good date pickers that I have found are:

* [http://accessibility.athena-ict.com/aria/examples/datepicker2.shtml]()
* [http://whatsock.com/tsg/Coding%20Arena/ARIA%20Date%20Pickers/ARIA%20Date%20Picker%20%28Basic%29/demo.htm]()
* [https://assets.cms.gov/resources/framework/2.0/Pages/datepicker.html]()
* [http://www.oaa-accessibility.org/examplep/datepicker1/]()
* [http://haltersweb.github.io/Accessibility/date-picker.html]()

### Exercises Week 2

#### User scenario

Marijn works as a software developer, while only using his left hand to write code and use the internet. Marijn has an alleged difficulty talking. Marijn uses the web everyday like the rest of us, with only one more assistive technology on hand, called sticky keys. This basically means that when he presses a key, it just continues pressing until he says the computer to quit doing that. He does not use a mouse and when hitting keys he is (probably) very imprecise.

Marijn wants to lookup flight departure times in an easy manner. However, as mentioned above the date-time pickers from both the large public transport planner companies (NS and 9292) are leaving some things to be desired (at least for Marijn). He needs to be able to quickly plan out both his date and time without a mouse and other precise movements. Perhaps, along the way we meet some other bumps, like selecting a departure and destination city (I can imagine), which we might tackle.

Marijn is skilled with computers, as he is a programmer, however he is known for thinking about what he has to accomplish on the computer before actually pressing a key. This means that Marijn should be presented structured interfaces with as few options as possible per page/section. Marijn will need to select a date by selecting a year first, which is also chunked up in pairs of three years, which can be "shifted over". When he selected a year, he will be taken to the month selection tool, and after that to the day of the month. Progressive disclosure is essential to not make him want to immediately quit the application.

#### Design principles

* **Clarity**: For Marijn, clarity is really important, since it releases the stress on him, preserved to him by websites with a lot of interactive elements at once. You should avoid having too much elements on any given section of the page to improve the users understanding of the interactive elements on the page. Buttons and links should also be clear from the get-go. In my project I added focus and hover states on all buttons and links to be very clear what can be interacted with.
    It should also be very clear here for the user what the date is that he has currently selected.

* **Keep users in control**: Since this product is especially created for Marijn, I wanted to give him as much options as possible within one demo application. An example I can give of this is that I gave Marijn the option to use the native date picker from the browser if he wished to use that over the custom made one.

* **Consistency matters**: This principle is relating to the fact that similar elements with similar actions (like links) should look and behave (pretty much) the same. In this application I mainly seperated the links from the buttons in styling. Buttons having a border, while links always have an underline, even if they wouldn't navigate to another page.

* **Progressive disclosure**: This principle means to not bombard a user with all the "elements" needed to complete a step, instead give the user the elements step by step to reduce cognitive load. In this project I decided it would be best for Marijn to split the date picker up in multiple sections, the year, month and day selection "screens".

#### Exclusive design principles

* **Study situation**: In this project we study how Marijn uses the web and especially the product that we design for him in these three weeks. We can do that, because Marijn tagged along for two review sessions to test our applications at first hand. This meant that we can see what he does while using his computer and how we can make our applications even better for him. We can test if we studied his situation well enough, by having another review session with him the next time to validate our changes.

* **Ignore conventions**: This principle pretty much means to ignore the conventions that you know and love, and try some new things, especially created for a single user. Breaking conventions means, for example not using existing design principles and native browser features, such as the `<input type="date">` HTML element. In this application I tried to ignore pretty a lot of conventions, like not using the native date picker and building my own especially for Marijn.

* **Prioritise identity**: This principle is less on the technical side, but more on the concepting side of the application. For example, Marijn wants to have full control over the features that we make for him in these few weeks. An example of something in this application that prioritises his identitiy is the fact that he had made clear that he dislikes the travel planners from the big travel companies. I decided to take this into account and focus on creating something that focusses on travel planning.

* **Add nonsense**: This principle basically means to make the application from functional to fun. Currently, there are not a lot of fun things in the application, for me atleast, however, Marijn expressed that he thinks it is fun, as stated in the first review session. However, I want to add more fun things to the application to oblige fully by this principle.

#### Further enhance demo of week 1

This week I added some more subtle, but useful features to the date picker, like for example, the ability to smash the keyboards alphabetic keys in order to select a date when it is focussed. This will cause Marijn to miss the selection button less often.

## Review sessions

### Review session week 1

Marijn was unfortunately not present at this moment, which resulted in the group not knowing exactly what he can and what he can't do on the web.

We did get to know some things about him, for example:

* He uses an **Apple MacBook Pro** as his **daily driver**.
* The only **assistive technology** he uses is **sticky keys**.
* He only uses one hand to use his computer.
* Has issues lifting his hand.
* Uses his left hand.
* Is a programmer
* Can use the arrow keys.
* Can be seen as spastic.
* Is difficult to understand with his voice.

### Review session week 2

#### General

* Marijn regularly misses the keys he wants to actually hit.
* Marijn never uses tab to navigate a page, instead, uses the spacebar and arrow keys.
* Uses his trackpad a lot as well.
* Can use the native drag and drop system.
* Trello is navigatable by keyboard.
* Very difficult to understand by voice.
* Uses the touchbar of his MacBook.
* Thinks for a long time before he types something.
* Allways make everything case insensitive.

#### Personal

* Thinks the idea is great, but needs some minor tweaks.
* Would like to see the date buttons closer next to each other.
* The buttons (especially the days) should be bigger.
* The page should be more concentrated together.

#### Application tested

Below, you can see the screenshots of the application that I tested in this weeks review session.
The personal feedback above is related to these screenshots.

![Application of week 2 - Screenshot 1](./docs/week-2-1.png)

![Application of week 2 - Screenshot 2](./docs/week-2-2.png)

![Application of week 2 - Screenshot 3](./docs/week-2-3.png)

![Application of week 2 - Screenshot 4](./docs/week-2-4.png)

![Application of week 2 - Screenshot 5](./docs/week-2-5.png)

![Application of week 2 - Screenshot 6](./docs/week-2-6.png)

### Review session week 3

## Process

* [ ] Enhance the demo of week 2 with the feedback from the review session.
* [X] Create an initial demo for week 1.
* [X] Explain how the exclusive design principles will work on this demo (as well as how to test it).
* [X] How to use Joshua Porters design principles in this excercise. (Explain how the principle works and how to implement it.)
* [X] Write a user scenario.

## Project tips

* Things may fail.
* Make prototypes.
* Take a look at access keys.
* Focus on multiple small items.
* It should initially just work for the user, then be pleasurable to use.
* Multiple small tests are more effective than a few large tests.

You should not test _known knowns_, but instead test the _known uknowns_ and the _unknown unknowns_.

**Usability**: Learnable, efficient, rememberable, mistake aversion, nice to use.

If you want to get to know user needs, write a user scenario.

## Sources

* [Get amount of days in a given month for a given year](https://dzone.com/articles/determining-number-days-month).

## License

This repository is licensed as [MIT](LICENSE) by [Maikel van Veen](https://github.com/maikxx).