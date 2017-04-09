module.exports = function (mongoose) {
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    var userSchema = Schema({
        userType: { type: String, required: true, enum: ["ADMIN", "TIPPER", "TAGGER"] },
        username: { type: String, required: true },
        password: { type: String, required: true },
        name: String,
        balance: { type: Number, default: 0 },
        tasks: [{ type: ObjectId, ref: "Task" }],
        dateCreated: { type: Date, default: Date.now }
    });

    return mongoose.model("User", userSchema);
};