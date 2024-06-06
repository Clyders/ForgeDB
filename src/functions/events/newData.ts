import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { RecordData } from "../../util"

export enum DataType { identifier, name, id, type, value, guildId }

export default new NativeFunction({
    name: "$newData",
    version: "2.0.0",
    description: "Retrieves the new data that has been updated for a record during an update event",
    unwrap: true,
    args: [
        {
            name: "type",
            description: "The type of data you want to retrieve",
            rest: false,
            type: ArgType.Enum,
            enum: DataType,
            required: true,
        }
    ],
    brackets: true,
    async execute(ctx, [type]) {
        //@ts-ignore
        return this.success((ctx.runtime.extras as {newData: RecordData}).newData[DataType[type].toString()])
    },
})
