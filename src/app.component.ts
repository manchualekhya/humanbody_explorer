import { Component, ChangeDetectionStrategy, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

export interface BodySystem {
  id: string;
  name: string;
  emoji: string;
  description: string;
  gradientClass: string;
  modelUrl: string;
  funFacts: string[];
  quizzes: Quiz[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  private sanitizer = inject(DomSanitizer);

  bodySystems = signal<BodySystem[]>([
    {
      id: 'digestive',
      name: 'Digestive System',
      emoji: '\u{1F37D}\u{FE0F}', // 🍽️
      description: 'Breaks down food',
      gradientClass: 'from-yellow-400 to-orange-500',
      modelUrl: 'https://sketchfab.com/models/584766fd58684369b166611faec98e04/embed?autospin=1&ui_theme=dark',
      funFacts: [
        "Your stomach's digestive acids are strong enough to dissolve zinc.",
        "The digestive system is home to more bacteria than there are cells in your entire body.",
        "It takes about 6 to 8 hours for food to pass through your stomach and small intestine."
      ],
      quizzes: [
        {
          question: 'How long is the small intestine in an average adult?',
          options: ['~10 feet', '~22 feet', '~5 feet'],
          answer: '~22 feet',
        },
        {
          question: 'Which organ produces bile to help digest fats?',
          options: ['Stomach', 'Liver', 'Pancreas'],
          answer: 'Liver',
        },
        {
          question: 'What is the primary role of the large intestine?',
          options: ['Absorb nutrients', 'Absorb water', 'Produce enzymes'],
          answer: 'Absorb water',
        },
        {
          question: 'What enzyme in saliva begins carbohydrate digestion?',
          options: ['Lipase', 'Protease', 'Amylase'],
          answer: 'Amylase',
        },
        {
          question: 'Tiny finger-like projections in the small intestine that absorb nutrients are called:',
          options: ['Cilia', 'Villi', 'Flagella'],
          answer: 'Villi',
        },
        {
          question: 'The muscular contractions that move food through the digestive tract are called:',
          options: ['Peristalsis', 'Osmosis', 'Flexion'],
          answer: 'Peristalsis',
        },
        {
          question: 'Which organ produces insulin as well as digestive enzymes?',
          options: ['Gallbladder', 'Pancreas', 'Spleen'],
          answer: 'Pancreas',
        },
        {
          question: 'What is the final section of the large intestine before the anus?',
          options: ['Colon', 'Cecum', 'Rectum'],
          answer: 'Rectum',
        }
      ],
    },
    {
      id: 'respiratory',
      name: 'Respiratory System',
      emoji: '\u{1F32A}\u{FE0F}', // 🌬️
      description: 'Breathes in oxygen',
      gradientClass: 'from-sky-400 to-blue-500',
      modelUrl: 'https://sketchfab.com/models/250911151757489da1cf5501b791f363/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'The right lung is slightly larger than the left lung to make room for the heart.',
        'You lose about half a liter of water a day just by breathing.',
        'An average person breathes in around 11,000 liters of air every day.'
      ],
      quizzes: [
        {
          question: 'What is the main muscle used for breathing?',
          options: ['Bicep', 'Diaphragm', 'Pectoral'],
          answer: 'Diaphragm',
        },
        {
          question: 'What are the tiny air sacs in the lungs where gas exchange occurs?',
          options: ['Bronchioles', 'Alveoli', 'Trachea'],
          answer: 'Alveoli',
        },
        {
          question: 'Humans exhale which gas as a waste product of respiration?',
          options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide'],
          answer: 'Carbon Dioxide',
        },
        {
          question: 'What flap of tissue prevents food from entering the windpipe (trachea)?',
          options: ['Tongue', 'Epiglottis', 'Uvula'],
          answer: 'Epiglottis',
        },
        {
          question: 'What are the tiny hairs that line the airways and help clean them called?',
          options: ['Villi', 'Flagella', 'Cilia'],
          answer: 'Cilia',
        },
        {
          question: 'Which part of the respiratory system contains the vocal cords?',
          options: ['Pharynx', 'Larynx', 'Bronchus'],
          answer: 'Larynx',
        },
        {
          question: 'What protein in red blood cells is responsible for carrying oxygen?',
          options: ['Keratin', 'Collagen', 'Hemoglobin'],
          answer: 'Hemoglobin',
        },
        {
          question: 'What is the scientific name for the windpipe?',
          options: ['Esophagus', 'Trachea', 'Larynx'],
          answer: 'Trachea',
        }
      ],
    },
    {
      id: 'circulatory',
      name: 'Circulatory System',
      emoji: '\u{1FABC}', // 🫀
      description: 'Pumps blood',
      gradientClass: 'from-red-500 to-rose-600',
      modelUrl: 'https://sketchfab.com/models/f88b080741044fb5894f171ea9118f51/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'If you were to lay out all of the arteries, capillaries, and veins in one adult, they would stretch about 60,000 miles!',
        'Your heart beats about 100,000 times in one day.',
        'A single drop of blood contains millions of red blood cells.'
      ],
      quizzes: [
        {
          question: 'Which component of blood helps fight infection?',
          options: ['Red Blood Cells', 'Platelets', 'White Blood Cells'],
          answer: 'White Blood Cells',
        },
        {
          question: 'How many chambers does the human heart have?',
          options: ['Two', 'Three', 'Four'],
          answer: 'Four',
        },
        {
          question: 'What is the largest artery in the human body?',
          options: ['Aorta', 'Pulmonary Artery', 'Femoral Artery'],
          answer: 'Aorta',
        },
        {
          question: 'Which chamber of the heart pumps oxygenated blood to the rest of the body?',
          options: ['Right Atrium', 'Left Ventricle', 'Right Ventricle'],
          answer: 'Left Ventricle',
        },
        {
          question: 'What are the smallest blood vessels, where nutrient and gas exchange occurs?',
          options: ['Arterioles', 'Venules', 'Capillaries'],
          answer: 'Capillaries',
        },
        {
          question: 'The circulation of blood between the heart and lungs is called the:',
          options: ['Systemic Circuit', 'Pulmonary Circuit', 'Coronary Circuit'],
          answer: 'Pulmonary Circuit',
        },
        {
          question: 'Which blood cells are responsible for clotting?',
          options: ['Leukocytes', 'Erythrocytes', 'Platelets'],
          answer: 'Platelets',
        },
        {
          question: 'What is the liquid component of blood called?',
          options: ['Cytoplasm', 'Plasma', 'Serum'],
          answer: 'Plasma',
        }
      ],
    },
    {
      id: 'nervous',
      name: 'Nervous System',
      emoji: '\u{1F9E0}', // 🧠
      description: 'Controls the body',
      gradientClass: 'from-purple-500 to-indigo-600',
      modelUrl: 'https://sketchfab.com/models/63ca49dea63547ea9bf26e2b92571b9e/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'There are more nerve cells in the human brain than there are stars in the Milky Way.',
        'The brain uses over a quarter of the oxygen used by the human body.',
        "A newborn baby's brain triples in size during its first year of life."
      ],
      quizzes: [
        {
          question: 'What is the largest part of the human brain?',
          options: ['Cerebellum', 'Brainstem', 'Cerebrum'],
          answer: 'Cerebrum',
        },
        {
          question: 'Nerve impulses can travel at speeds of up to...',
          options: ['100 mph', '250 mph', '50 mph'],
          answer: '250 mph',
        },
        {
          question: 'The nervous system is divided into two main parts: the Central Nervous System and the...?',
          options: ['Peripheral Nervous System', 'Autonomic Nervous System', 'Somatic Nervous System'],
          answer: 'Peripheral Nervous System',
        },
        {
          question: 'The gap between two nerve cells is called a:',
          options: ['Axon', 'Dendrite', 'Synapse'],
          answer: 'Synapse',
        },
        {
          question: 'An automatic, involuntary response to a stimulus is called a:',
          options: ['Reflex', 'Reaction', 'Instinct'],
          answer: 'Reflex',
        },
        {
          question: 'What fatty substance insulates nerve fibers and speeds up impulses?',
          options: ['Keratin', 'Myelin Sheath', 'Collagen'],
          answer: 'Myelin Sheath',
        },
        {
          question: 'Chemicals that transmit signals across a synapse are called:',
          options: ['Hormones', 'Enzymes', 'Neurotransmitters'],
          answer: 'Neurotransmitters',
        },
        {
          question: 'Which part of the brain is responsible for balance and coordination?',
          options: ['Cerebrum', 'Cerebellum', 'Medulla'],
          answer: 'Cerebellum',
        }
      ],
    },
    {
      id: 'excretory',
      name: 'Excretory System',
      emoji: '\u{1F6BD}', // 🚽
      description: 'Removes waste',
      gradientClass: 'from-amber-500 to-yellow-600',
      modelUrl: 'https://sketchfab.com/models/d5d3b4e21c9040f8b004c2102913a5d2/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'Your kidneys filter about 120 to 150 quarts of blood each day to produce about 1 to 2 quarts of urine.',
        "The average person's bladder can hold about 16-24 ounces of urine.",
        'Humans can live with only one kidney.'
      ],
      quizzes: [
        {
          question: 'What are the main filtering units of the kidneys called?',
          options: ['Alveoli', 'Neurons', 'Nephrons'],
          answer: 'Nephrons',
        },
        {
          question: 'Which tube carries urine from the bladder out of the body?',
          options: ['Ureter', 'Urethra', 'Nephron'],
          answer: 'Urethra',
        },
        {
          question: 'Besides the kidneys, which other organ is a major part of the excretory system?',
          options: ['Lungs', 'Skin', 'Heart'],
          answer: 'Skin',
        },
        {
          question: 'Which organ converts toxic ammonia into a less toxic substance called urea?',
          options: ['Kidney', 'Liver', 'Bladder'],
          answer: 'Liver',
        },
        {
          question: 'What is the main nitrogenous waste product found in human urine?',
          options: ['Uric Acid', 'Ammonia', 'Urea'],
          answer: 'Urea',
        },
        {
          question: 'Sweat glands in the skin help excrete water and what other substance?',
          options: ['Sugar', 'Salt', 'Fat'],
          answer: 'Salt',
        },
        {
          question: 'The tubes that carry urine from the kidneys to the bladder are the:',
          options: ['Urethras', 'Ureters', 'Fallopian tubes'],
          answer: 'Ureters',
        },
        {
          question: 'What hormone, also known as ADH, regulates water balance by controlling the kidneys?',
          options: ['Insulin', 'Adrenaline', 'Antidiuretic hormone'],
          answer: 'Antidiuretic hormone',
        }
      ],
    },
    {
      id: 'skeletal',
      name: 'Skeletal System',
      emoji: '\u{1F9B4}', // 🦴
      description: 'Support & protection',
      gradientClass: 'from-slate-300 to-slate-500',
      modelUrl: 'https://sketchfab.com/models/950d0a46531f492ab8715777e312a5bf/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'An adult human has 206 bones, but a baby is born with around 300 bones, which fuse together as they grow.',
        'The smallest bone in the human body is the stapes in the ear, about the size of a grain of rice.',
        'Bones have a honeycomb-like structure inside which makes them strong but lightweight.'
      ],
      quizzes: [
        {
          question: 'What is the longest bone in the human body?',
          options: ['Humerus (upper arm)', 'Femur (thigh bone)', 'Tibia (shin bone)'],
          answer: 'Femur (thigh bone)',
        },
        {
          question: 'Where is red bone marrow, which produces blood cells, primarily found?',
          options: ['In compact bone', 'In spongy bone', 'In the periosteum'],
          answer: 'In spongy bone',
        },
        {
          question: 'What is the flexible connective tissue that connects bones together called?',
          options: ['Tendons', 'Ligaments', 'Cartilage'],
          answer: 'Ligaments',
        },
        {
          question: 'Besides support, a key function of bones is to produce what?',
          options: ['Hormones', 'Enzymes', 'Blood cells'],
          answer: 'Blood cells',
        },
        {
          question: 'What type of joint allows for the greatest range of motion, like in the shoulder?',
          options: ['Hinge joint', 'Pivot joint', 'Ball-and-socket joint'],
          answer: 'Ball-and-socket joint',
        },
        {
          question: 'The bones of the skull, spine, and rib cage form the:',
          options: ['Appendicular skeleton', 'Axial skeleton', 'Cartilaginous skeleton'],
          answer: 'Axial skeleton',
        },
        {
          question: 'What smooth, slippery tissue covers the ends of bones at a joint?',
          options: ['Ligament', 'Tendon', 'Cartilage'],
          answer: 'Cartilage',
        },
        {
          question: 'The human hand and wrist contain how many individual bones?',
          options: ['15 bones', '27 bones', '34 bones'],
          answer: '27 bones',
        }
      ],
    },
    {
      id: 'muscular',
      name: 'Muscular System',
      emoji: '\u{1F4AA}', // 💪
      description: 'Movement',
      gradientClass: 'from-pink-500 to-red-500',
      modelUrl: 'https://sketchfab.com/models/7ea21567ff9942bf9511e2d99efe85d9/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'The strongest muscle in the human body, relative to its size, is the masseter (your jaw muscle).',
        'It takes more muscles to frown than it does to smile.',
        'Muscles make up about 40% of your total body weight.'
      ],
      quizzes: [
        {
          question: 'Which type of muscle is found in the heart?',
          options: ['Smooth muscle', 'Skeletal muscle', 'Cardiac muscle'],
          answer: 'Cardiac muscle',
        },
        {
          question: 'What connects muscles to bones?',
          options: ['Ligaments', 'Cartilage', 'Tendons'],
          answer: 'Tendons',
        },
        {
          question: 'Which type of muscle action is voluntary (under your control)?',
          options: ['Cardiac', 'Smooth', 'Skeletal'],
          answer: 'Skeletal',
        },
        {
          question: 'What acid builds up in muscles during intense exercise, causing a burning sensation?',
          options: ['Hydrochloric Acid', 'Lactic Acid', 'Citric Acid'],
          answer: 'Lactic Acid',
        },
        {
          question: 'Muscles that you cannot consciously control, like those in your stomach, are called:',
          options: ['Voluntary muscles', 'Skeletal muscles', 'Involuntary muscles'],
          answer: 'Involuntary muscles',
        },
        {
          question: 'When a muscle contracts, its opposing muscle relaxes. This is known as an:',
          options: ['Isotonic pair', 'Synergistic pair', 'Antagonistic pair'],
          answer: 'Antagonistic pair',
        },
        {
          question: 'What is the large muscle in the front of the thigh called?',
          options: ['Hamstring', 'Gluteus', 'Quadriceps'],
          answer: 'Quadriceps',
        },
        {
          question: 'What is the involuntary contraction of skeletal muscles to generate heat called?',
          options: ['Flexing', 'Stretching', 'Shivering'],
          answer: 'Shivering',
        }
      ],
    },
    {
      id: 'full-body',
      name: 'Full Body Anatomy',
      emoji: '\u{1F9CD}', // 🧍
      description: 'An overview of the entire human body',
      gradientClass: 'from-green-400 to-teal-500',
      modelUrl: 'https://sketchfab.com/models/9b0b079953b840bc9a13f524b60041e4/embed?autospin=1&ui_theme=dark',
      funFacts: [
        'The human body contains enough iron to make a 3-inch nail.',
        'Your body produces about 25 million new cells each second.',
        'The average adult human has about 5 liters of blood.'
      ],
      quizzes: [
        {
          question: 'Approximately what percentage of the human body is water?',
          options: ['40%', '60%', '80%'],
          answer: '60%',
        },
        {
          question: 'How many senses do humans traditionally have?',
          options: ['Three', 'Five', 'Seven'],
          answer: 'Five',
        },
        {
          question: 'What is the largest organ of the human body?',
          options: ['Liver', 'Brain', 'Skin'],
          answer: 'Skin',
        },
        {
          question: 'What is the molecule that carries the genetic instructions for all living organisms?',
          options: ['RNA', 'Protein', 'DNA'],
          answer: 'DNA',
        },
        {
          question: "The body's ability to maintain a stable internal environment is called:",
          options: ['Metabolism', 'Homeostasis', 'Respiration'],
          answer: 'Homeostasis',
        },
        {
          question: 'Which system is responsible for producing hormones that regulate bodily functions?',
          options: ['Nervous System', 'Endocrine System', 'Excretory System'],
          answer: 'Endocrine System',
        },
        {
          question: "What is the body's primary defense system against pathogens?",
          options: ['Circulatory System', 'Immune System', 'Skeletal System'],
          answer: 'Immune System',
        },
        {
          question: 'What is the basic structural and functional unit of all known organisms?',
          options: ['The Atom', 'The Organ', 'The Cell'],
          answer: 'The Cell',
        }
      ],
    }
  ]);

  selectedSystem = signal<BodySystem | null>(null);
  selectedQuizOption = signal<string | null>(null);
  quizResult = signal<'correct' | 'incorrect' | null>(null);
  currentFunFactIndex = signal(0);
  currentQuizIndex = signal(0);


  safeSelectedSystemUrl = computed<SafeResourceUrl | null>(() => {
    const system = this.selectedSystem();
    if (system && system.modelUrl) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(system.modelUrl);
    }
    return null;
  });

  selectSystem(system: BodySystem): void {
    this.selectedSystem.set(system);
    this.resetQuizAndFacts();
  }

  closeViewer(): void {
    this.selectedSystem.set(null);
    this.resetQuizAndFacts();
  }
  
  private resetQuizAndFacts(): void {
    this.selectedQuizOption.set(null);
    this.quizResult.set(null);
    this.currentFunFactIndex.set(0);
    this.currentQuizIndex.set(0);
  }

  checkAnswer(option: string, correctAnswer: string): void {
    if (this.selectedQuizOption()) return; // Already answered

    this.selectedQuizOption.set(option);
    if (option === correctAnswer) {
      this.quizResult.set('correct');
    } else {
      this.quizResult.set('incorrect');
    }
  }

  nextQuestion(): void {
    const system = this.selectedSystem();
    if (system && this.currentQuizIndex() < system.quizzes.length - 1) {
      this.currentQuizIndex.update(i => i + 1);
      this.selectedQuizOption.set(null);
      this.quizResult.set(null);
    }
  }

  prevQuestion(): void {
    if (this.currentQuizIndex() > 0) {
      this.currentQuizIndex.update(i => i - 1);
      this.selectedQuizOption.set(null);
      this.quizResult.set(null);
    }
  }

  nextFunFact(): void {
    const system = this.selectedSystem();
    if (system) {
      this.currentFunFactIndex.update(i => (i + 1) % system.funFacts.length);
    }
  }

  prevFunFact(): void {
    const system = this.selectedSystem();
    if (system) {
      this.currentFunFactIndex.update(i => (i - 1 + system.funFacts.length) % system.funFacts.length);
    }
  }
}
