import moment from "moment";

const name = [
  "Alfredo",
  "Angélica",
  "Arturo",
  "Erick",
  "Aby",
  "Tania",
  "Jairo",
  "Daniela"
];

const lastName = [
  "Urbano",
  "Lopez",
  "Vega",
  "Cervantez",
  "Reyes",
  "Agnesi",
  "Mejia",
  "Arreola"
];

export const newData = () => [
  {
    id: (
      Math.floor(Math.random() * (0 - 1000 + 1) + 0) + new Date().getTime()
    ).toString(),
    from: "mark@walmart.com",
    to: "cziem0@surveymonkey.com",
    subject:
      name[Math.floor(Math.random() * 7)] +
      " " +
      lastName[Math.floor(Math.random() * 7)],
    body: "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
    date: moment().format("LT"),
    isReaded: false,
    section: "Inbox",
    avatar:
      "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
    tags: ["Dev", "Web", "Issue"],
    attachements: []
  },
  {
    id: (
      Math.floor(Math.random() * (0 - 1000 + 1) + 0) + new Date().getTime()
    ).toString(),
    from: "alfred@redbox.com",
    to: "cziem0@surveymonkey.com",
    subject:
      name[Math.floor(Math.random() * 7)] +
      " " +
      lastName[Math.floor(Math.random() * 7)],
    body: "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
    date: moment().format("LT"),
    isReaded: false,
    section: "Inbox",
    avatar:
      "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
    tags: ["IA", "Code", "Javascript"],
    attachements: [
      {
        file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
        name: "ut_nulla_sed.jpeg"
      },
      {
        file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
        name: "ut_nulla_sed.jpeg"
      },
      {
        file: "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
        name: "ut_nulla_sed.jpeg"
      }
    ]
  }
];
