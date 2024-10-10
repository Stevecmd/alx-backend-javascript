// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'major';
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major'
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor'
    };
}
