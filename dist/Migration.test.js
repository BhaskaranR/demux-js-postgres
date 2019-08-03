"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const Migration_1 = require("./Migration");
class TestMigration extends Migration_1.Migration {
    get _downQueryFile() { return this.downQueryFile; }
}
const baseDir = path.join(path.resolve('./'), 'src');
describe('Migration', () => {
    it('instantiates a Migration instance', () => {
        const migration = new TestMigration('test', 'public', path.join(baseDir, 'testHelpers/migration1.sql'), path.join(baseDir, 'testHelpers/migration2.sql'));
        expect(migration).toBeTruthy();
        expect(migration._downQueryFile).not.toBe(null);
    });
});
//# sourceMappingURL=Migration.test.js.map