import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

@Component({
  selector: 'svv-skill-badge',
  standalone: true,
  imports: [],
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBadgeComponent {
  static totalBadges = 0;
  static shuffledColors: string[] = [];
  readonly badgeIndex: number;

  constructor() {
    this.badgeIndex = SkillBadgeComponent.totalBadges++;

    // Initialize shuffled colors on first instance
    if (SkillBadgeComponent.shuffledColors.length === 0) {
      SkillBadgeComponent.shuffledColors = this.shuffleArray([
        '#60A5FA', // Light Blue
        '#34D399', // Light Green
        '#A78BFA', // Light Purple
        '#F87171', // Light Red
        '#FBBF24', // Light Amber
        '#22D3EE', // Light Cyan
        '#F472B6', // Light Pink
        '#FB923C', // Light Orange
        '#A3E635', // Bright Lime
        '#818CF8', // Light Indigo
        '#2DD4BF', // Light Teal
        '#FB7185', // Light Rose
        '#D97706', // Bright Orange
        '#9CA3AF', // Light Gray
        '#8B5CF6', // Bright Violet
        '#10B981', // Bright Emerald
        '#EF4444', // Bright Red
        '#3B82F6', // Bright Blue
      ]);
    }
  }

  private shuffleArray(array: string[]): string[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  badgeColor = computed(() => {
    const colorIndex =
      this.badgeIndex % SkillBadgeComponent.shuffledColors.length;
    return SkillBadgeComponent.shuffledColors[colorIndex];
  });
}
