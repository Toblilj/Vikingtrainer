
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface RusticBackgroundProps {
  children: React.ReactNode;
  style?: any;
}

export function RusticBackground({ children, style }: RusticBackgroundProps) {
  return (
    <View style={[styles.container, style]}>
      {/* Main gradient background */}
      <LinearGradient
        colors={['#0d1f33', '#0a1626', '#060f1a']}
        style={styles.mainGradient}
      />
      
      {/* Dark vignette overlay */}
      <View style={styles.vignette} />
      
      {/* Texture overlay (simplified - RN doesn't support complex patterns) */}
      <View style={styles.texture} />
      
      {/* Content */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  mainGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  vignette: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  texture: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    flex: 1,
  },
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OLD
// interface RusticBackgroundProps {
//   children: React.ReactNode;
//   // className?: string;
//   style?: React.CSSProperties;
// }

// export function RusticBackground({ children, className = "" }: RusticBackgroundProps) {
//   return (
//     <View 
//       className={`relative ${className}`}
//       style={{
//         background: `
//           radial-gradient(ellipse at top, rgba(26, 47, 77, 0.4) 0%, transparent 50%),
//           radial-gradient(ellipse at bottom, rgba(10, 22, 38, 0.6) 0%, transparent 50%),
//           linear-gradient(to bottom, #0d1f33, #0a1626, #060f1a)
//         `,
//       }}
//     >
//       <View 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
//         }}
//       />
      
//       <View 
//         className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 6px),
//             repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.4) 3px, rgba(0,0,0,0.4) 6px),
//             radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 50%),
//             radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 50%)
//           `
//         }}
//       />

//       <View 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
//         }}
//       />
      
//       <View className="relative z-10">
//         {children}
//       </View>
//     </View>
//   );
// }


