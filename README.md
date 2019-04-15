# Web Design

## Table of Contents

1. [Exercises](#Exercises)
    1. [Exercise 1](#exercise-1)
2. [Review sessions](#review-session)
    1. [Week 1](#review-session-week-1)
3. [Sources](#Sources)
4. [License](#License)

## Exercises

### Exercise 1

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

You can [view the 🚀 demo 🚀 here](https://web-design-week1.netlify.com/).

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

Tips for the project:

* Things may fail.
* Make prototypes.
* Take a look at access keys.
* Focus on multiple small items.
* It should initially just work for the user, then be pleasurable to use.

## Sources

* [Get amount of days in a given month for a given year](https://dzone.com/articles/determining-number-days-month).

## License

This repository is licensed as [MIT](LICENSE) by [Maikel van Veen](https://github.com/maikxx).