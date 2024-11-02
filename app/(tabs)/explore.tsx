import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0000' }}
      headerImage={
        <Image
          source={require('@/assets/images/7291278.jpg')}
          style={styles.headerImage}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          INFORMATION 📞
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.infoContainer}>
        <ThemedText type="body" style={styles.infoText}>
          La transition vers des numéros de téléphone à 10 chiffres est cruciale pour suivre le passage à l'IPv6 et pour améliorer la disponibilité des numéros. 
          En ajoutant le préfixe “01” devant les numéros actuels de 8 chiffres, vous assurez que vos contacts sont à jour. 
          Cela évite des interruptions dans la communication et permet une compatibilité avec les nouvelles normes de télécommunication.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          Assurez-vous de mettre à jour vos contacts afin que vos applications, services bancaires, et autres services soient en conformité avec cette mise à jour.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          De plus, l'extension à 10 chiffres permet d'augmenter le nombre total de numéros disponibles, facilitant ainsi l'accès à de nouveaux services et applications. 
          Cela est particulièrement important à mesure que la population augmente et que la demande pour les services de télécommunication continue de croître.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          Cette mise à jour contribuera également à la modernisation de l'infrastructure de télécommunication, ce qui se traduira par une meilleure qualité de service et des innovations futures.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          Par ailleurs, un système de numérotation amélioré peut renforcer la sécurité des communications, en facilitant la détection des appels frauduleux ou indésirables.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          Enfin, l'extension à 10 chiffres permet de mieux intégrer des technologies émergentes, telles que les services VoIP et les applications de messagerie instantanée, offrant ainsi une expérience utilisateur plus fluide et moderne.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          Notez que cette application ne collecte aucune donnée et n'est pas propulsée par un réseau GSM, ni par l'État béninois ou l'ARCEP. Il s'agit d'un travail personnel de réflexion pour aider à la mise à jour des contacts de votre répertoire.
        </ThemedText>
        <ThemedText type="body" style={styles.infoText}>
          Pour toute question ou assistance, vous pouvez me contacter au numéro suivant : +229 0167030967, également disponible sur WhatsApp.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.footer}>
        <ThemedText type="body" style={styles.footerText}>
          By Ramane BODA 
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    padding: 16,
  },
  infoText: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 10, // Ajout d'un espacement entre les paragraphes
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
