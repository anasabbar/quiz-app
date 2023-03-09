import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonRadioGroup, IonRadio, IonLabel, IonItemDivider, IonButton, useIonAlert } from '@ionic/react';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [score, SetScore] = useState(0);
  const [presentAlert] = useIonAlert();

  const optionClicked = (isCorrect: boolean) => {
    if (isCorrect) {
      SetScore(score + 1);
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid fixed={true}>
          <IonRow class='ion-justify-content-center'>
            <IonCol>
              <IonItemDivider color={'tertiary'}>
                <IonLabel>
                  What is the correct way to declare a variable in JavaScript?
                </IonLabel>
              </IonItemDivider>
            </IonCol>
            <IonCol size='4'>
              <IonRadioGroup>
                <IonItem>
                  <IonRadio  value="answer1" name='r1' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel>var = myVariable;</IonLabel>
                </IonItem>
                <IonItem>
                  <IonRadio value="answer2" name='r2' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel>const myVariable;</IonLabel>
                </IonItem>
                <IonItem>
                  <IonRadio onClick={() => { optionClicked(true) }} value="answer3" name='r3' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel>let myVariable = 0;</IonLabel>
                </IonItem>
              </IonRadioGroup>
            </IonCol>
          </IonRow>
          <IonItemDivider color={'default'}></IonItemDivider>
        </IonGrid>
        <IonGrid fixed={true}>
          <IonRow class='ion-justify-content-center'>
            <IonCol>
              <IonItemDivider color={'tertiary'}>
                <IonLabel>
                  What does the "=== " operator do in JavaScript?
                </IonLabel>
              </IonItemDivider>
            </IonCol>
            <IonCol size='4'>
              <IonRadioGroup>
                <IonItem>
                  <IonRadio value="custom1" name='r1' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel>Assigns a value to a variable</IonLabel>
                </IonItem>
                <IonItem>
                  <IonRadio onClick={() => { optionClicked(true) }} value="custom2" name='r2' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel class="ion-text-wrap">Checks if two values are equal in value and type</IonLabel>
                </IonItem>
                <IonItem>
                  <IonRadio value="custom3" name='r3' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel>Concatenates two strings</IonLabel>
                </IonItem>
              </IonRadioGroup>
            </IonCol>
          </IonRow>
          <IonItemDivider color={'default'}></IonItemDivider>
        </IonGrid>
        <IonGrid fixed={true}>
          <IonRow class='ion-justify-content-center'>
            <IonCol>
              <IonItemDivider color={'tertiary'}>
                <IonLabel>
                What is the difference between "let" and "var" in JavaScript?
                </IonLabel>
              </IonItemDivider>
            </IonCol>
            <IonCol size='4'>
              <IonRadioGroup>
                <IonItem>
                  <IonRadio value="custom1" name='r1' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel> There is no difference</IonLabel>
                </IonItem>
                <IonItem>
                  <IonRadio onClick={() => { optionClicked(true) }} value="custom2" name='r2' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel class="ion-text-wrap">"let" has block scope, while "var" has function scope</IonLabel>
                </IonItem>
                <IonItem>
                  <IonRadio  value="custom3" name='r3' mode='ios' color='tertiary'></IonRadio>
                  <IonLabel class="ion-text-wrap">"let" has function scope, while "var" has block scope</IonLabel>
                </IonItem>
              </IonRadioGroup>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid fixed={true}>
          <IonRow class='ion-justify-content-end'>
            <IonCol size='2'>
              <IonButton onClick={() =>
                presentAlert({
                  header: 'Score',
                  message: 'Your score is :' + score.toString(),
                  buttons: ['OK'],
                })
              } color={'tertiary'} size='default' expand="block">Check</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
