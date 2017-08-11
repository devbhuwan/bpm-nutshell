"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var chai_1 = require("chai");
var hello_world_component_1 = require("../src/hello-world.component");
var src_1 = require("../src");
describe('bpm-client-hello-world component', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [src_1.BpmClientComponentModule.forRoot()]
        });
    });
    it('should say hello world', function () {
        var fixture = testing_1.TestBed.createComponent(hello_world_component_1.HelloWorldComponent);
        fixture.detectChanges();
        chai_1.expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the bpm client component module!');
    });
});
//# sourceMappingURL=hello-world.component.spec.js.map