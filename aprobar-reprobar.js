let ratings = [85, 85, 30, 90, 20, 100];
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 70) {
        console.log(ratings[i]+"aprueba");
    } else {
        console.log(ratings[i]+"reprueba");
    }
}