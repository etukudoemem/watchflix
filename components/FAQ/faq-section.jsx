import { Accordion } from "./accordion"

export const FaqSection = () => {

    const accordionContent = [
        {
            id: "mbj",
            title: "What is Watchflix?",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde reprehenderit commodi quidem sit aliquam accusantium id excepturi. Perferendis atque natus aliquam quo blanditiis suscipit animi eius nesciunt non sequi.
            Quos nisi sed laborum. Est magni repudiandae vitae quia adipisci iure expedita voluptatum illo! Minima necessitatibus voluptates delectus exercitationem? Quam cupiditate velit quod aut laborum dolorum, voluptate nihil aliquid ipsa!`
        },
        {
            id: "bsh",
            title: "How much does Watchflix cost?",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde reprehenderit commodi quidem sit aliquam accusantium id excepturi. Perferendis atque natus aliquam quo blanditiis suscipit animi eius nesciunt non sequi.
            Quos nisi sed laborum. Est magni repudiandae vitae quia adipisci iure expedita voluptatum illo! Minima necessitatibus voluptates delectus exercitationem? Quam cupiditate velit quod aut laborum dolorum, voluptate nihil aliquid ipsa!`
        },
        {
            id: "cfh",
            title: "Where can I watch?",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde reprehenderit commodi quidem sit aliquam accusantium id excepturi. Perferendis atque natus aliquam quo blanditiis suscipit animi eius nesciunt non sequi.
            Quos nisi sed laborum. Est magni repudiandae vitae quia adipisci iure expedita voluptatum illo! Minima necessitatibus voluptates delectus exercitationem? Quam cupiditate velit quod aut laborum dolorum, voluptate nihil aliquid ipsa!`
        },
        {
            id: "lvk",
            title: "What can I watch on Watchflix?",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde reprehenderit commodi quidem sit aliquam accusantium id excepturi. Perferendis atque natus aliquam quo blanditiis suscipit animi eius nesciunt non sequi.
            Quos nisi sed laborum. Est magni repudiandae vitae quia adipisci iure expedita voluptatum illo! Minima necessitatibus voluptates delectus exercitationem? Quam cupiditate velit quod aut laborum dolorum, voluptate nihil aliquid ipsa!`
        },
        {
            id: "ztr",
            title: "Is Watchflix good for kids?",
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi unde reprehenderit commodi quidem sit aliquam accusantium id excepturi. Perferendis atque natus aliquam quo blanditiis suscipit animi eius nesciunt non sequi.
            Quos nisi sed laborum. Est magni repudiandae vitae quia adipisci iure expedita voluptatum illo! Minima necessitatibus voluptates delectus exercitationem? Quam cupiditate velit quod aut laborum dolorum, voluptate nihil aliquid ipsa!`
        },
    ]

    return(
        <>
            <main className="px-6 md:px-10 lg:px-30">
                <h2 className="text-lg lg:text-2xl font-semibold mb-4">
                    Frequently Asked Questions
                </h2>
                <section className="w-full">
                    {
                        accordionContent.map((content) => 
                            <Accordion key={content.id} content={content} />
                        )
                    }
                </section>
            </main>
        </>
    )
}