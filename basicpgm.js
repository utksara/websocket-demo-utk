const statement = "Hello"

for (var i = 0; i < 10; i++){
    for (var j = 0; j < i; j ++){
        process.stdout.write(statement)
    }
    process.stdout.write('\n')
}