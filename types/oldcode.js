//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OLD

// interface RusticButtonProps {
//   children: React.ReactNode;
//   onPress: () => void;
//   style?: any;
// }
// export function RusticButton({ children, onClick, className = "" }: RusticButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         relative px-8 py-4
//         bg-gradient-to-br from-[#1a2f4d] via-[#0f1f35] to-[#0a1626]
//         border-2 border-[#2d4a6b]/60
//         shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]
//         hover:shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]
//         active:shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(0,0,0,0.3)]
//         transition-all duration-200
//         hover:translate-y-[-2px]
//         active:translate-y-[1px]
//         text-[#e8dcc4]
//         rounded-sm
//         ${className}
//       `}
//       style={{
//         textShadow: '0 2px 4px rgba(0,0,0,0.6)',
//         backgroundImage: `
//           linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%),
//           linear-gradient(to bottom right, #1a2f4d, #0f1f35, #0a1626)
//         `
//       }}
//     >
//       <span className="relative z-10">{children}</span>
//       <div
//         className="absolute inset-0 opacity-[0.15] rounded-sm pointer-events-none"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px),
//             repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)
//           `
//         }}
//       />
//     </button>
//   );
// }
