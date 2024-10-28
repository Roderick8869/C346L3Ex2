import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Car = ({ icon_name, picture, qns, options, selectedAnswer, setAnswer }) => (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Icon name={icon_name} size={20} />
        <Image source={picture} style={{ width: 300, height: 300 }} />
        <Text>{qns}</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswer(value)}
            items={options.map(option => ({ label: option, value: option }))}
            value={selectedAnswer}
            style={{
                inputIOS: {
                    padding: 10,
                    backgroundColor: 'lightgray',
                    marginVertical: 5,
                    borderRadius: 5,
                    textAlign: 'center'
                },
                inputAndroid: {
                    padding: 10,
                    backgroundColor: 'lightgray',
                    marginVertical: 5,
                    borderRadius: 5,
                    textAlign: 'center'
                }
            }}
            placeholder={{ label: "Select an answer...", value: null }}
        />
    </View>
);

const App = () => {
    const [answers, setAnswers] = useState({ answer1: "", answer2: "", answer3: "", answer4: "" });

    const correctAnswers = {
        question1: 'Nissan',
        question2: 'Mercedes',
        question3: 'BMW',
        question4: 'Toyota',
    };

    const handleSubmit = () => {
        let score = 0;
        if (answers.answer1 === correctAnswers.question1) score++;
        if (answers.answer2 === correctAnswers.question2) score++;
        if (answers.answer3 === correctAnswers.question3) score++;
        if (answers.answer4 === correctAnswers.question4) score++;

        ToastAndroid.show(`You have ${score} correct answers!`, ToastAndroid.SHORT);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <StatusBar hidden={true} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Car Quiz Game</Text>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>

                <Car
                    icon_name="car"
                    picture={require('./img/nissan.jpg')}
                    qns="What car model is this?"
                    options={['Nissan', 'Honda', 'Toyota']}
                    selectedAnswer={answers.answer1}
                    setAnswer={(value) => setAnswers({ ...answers, answer1: value })}
                />
                <Car
                    icon_name="car"
                    picture={require('./img/mercedes.jpg')}
                    qns="What car model is this?"
                    options={['Mercedes', 'BMW', 'Audi']}
                    selectedAnswer={answers.answer2}
                    setAnswer={(value) => setAnswers({ ...answers, answer2: value })}
                />
                <Car
                    icon_name="car"
                    picture={require('./img/bmw.jpg')}
                    qns="What car model is this?"
                    options={['BMW', 'Volkswagen', 'Porsche']}
                    selectedAnswer={answers.answer3}
                    setAnswer={(value) => setAnswers({ ...answers, answer3: value })}
                />
                <Car
                    icon_name="car"
                    picture={require('./img/toyota.jpg')}
                    qns="What car model is this?"
                    options={['Toyota', 'Mazda', 'Lexus']}
                    selectedAnswer={answers.answer4}
                    setAnswer={(value) => setAnswers({ ...answers, answer4: value })}
                />

                <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit Answers</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default App;

