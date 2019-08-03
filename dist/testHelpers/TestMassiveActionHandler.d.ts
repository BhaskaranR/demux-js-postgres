import { MassiveActionHandler } from '../MassiveActionHandler';
export declare class TestMassiveActionHandler extends MassiveActionHandler {
    reset(): void;
    _loadIndexState(): Promise<import("demux").IndexState>;
    _getCyanAuditStatus(): boolean;
}
