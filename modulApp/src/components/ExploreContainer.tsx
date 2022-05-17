import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { RenderResult } from './RenderResult'

const ExploreContainer: React.FC = () => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        Для учеників середньої школи необхідно розробити застосування для
        вивчення геометрії та планіметрії. Для трьовимірних тіл необхідно
        розраховувати площину та об‘єм для двовимірних площину та периметр
        та для тих для яких це можливо радіус вписаної та описаної окружностей.
        Тривимірні тіла – трикутна піраміда, куб. Двовимірні - прямокутний трикутник.
        Створити поліморфний контейнер для їх виведення(як мінімум 3 елемента).
        Результати розрахунків необхідно виводити на екран.
      </p>
      <IonItem>
        <IonLabel position="floating">Кількість:</IonLabel>
        <IonInput type='number' id='quantity' value='1' />
      </IonItem>
      <IonButton expand="block" style={{ marginTop: '15px' }} onClick={RenderResult}>
        Розрахунок
      </IonButton>
    </div>
  )
}

export default ExploreContainer
