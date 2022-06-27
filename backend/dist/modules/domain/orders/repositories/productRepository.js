"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const entities_1 = require("../../../common/entities");
const product_entity_1 = require("../entities/product.entity");
const events_1 = require("../../../common/events");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository extends entities_1.BaseRepository {
    constructor(manager, eventDispatcher) {
        super(manager.getRepository(product_entity_1.Product), eventDispatcher);
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.EntityManager !== "undefined" && typeorm_2.EntityManager) === "function" ? _a : Object, events_1.SyncEventDispatcher])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=productRepository.js.map