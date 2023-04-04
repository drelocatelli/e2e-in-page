import AnotherExampleSpec from "./tests/anotherExample.spec";
import ExampleSpec from "./tests/example.spec";
import {DefinedTest} from '../bootstrap/definedTests.types';

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