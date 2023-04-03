import { Browser, Page } from "puppeteer";
import AnotherExampleSpec from "./tests/anotherExample.spec";
import ExampleSpec from "./tests/example.spec";

const definedTests : DefinedTest[] = [
    {
        name: 'Example test',
        class: ExampleSpec
    },
    {
        name: 'Another test',
        class: AnotherExampleSpec
    }
];

export default definedTests;