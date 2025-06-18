
'use server';
/**
 * @fileOverview Generates system insights and speculative scenarios from selected Mod36 Realities.
 *
 * - generateRealityInsight - A function that takes selected realities and returns an insight, scenario, and title.
 * - GenerateRealityInsightInput - The input type for the generateRealityInsight function.
 * - GenerateRealityInsightOutput - The return type for the generateRealityInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRealityInsightInputSchema = z.object({
  selectedRealities: z
    .array(z.string())
    .min(2, { message: "Please select at least two Realities." })
    .describe('An array of 2 or more selected Reality titles (e.g., ["Housing", "Climate", "Technology"]).'),
});
export type GenerateRealityInsightInput = z.infer<typeof GenerateRealityInsightInputSchema>;

const GenerateRealityInsightOutputSchema = z.object({
  title: z.string().describe('A concise, evocative title for the generated insight and scenario (e.g., "Faithful Infrastructures" or "The Media of Memory").'),
  systemInsight: z.string().describe('A brief paragraph (around 50-100 words) explaining the relationship between the chosen Realities and the systemic dynamics at play. Focus on interconnections and underlying patterns.'),
  speculativeScenario: z.string().describe('A micro-story, concept, or design provocation (around 100-150 words) that shows the selected Realities in action in a culturally rich, future-oriented, and design-relevant way. Emphasize Mod36 core values: modularity, systems thinking, cultural grounding (especially African/indigenous contexts), and imagination.'),
});
export type GenerateRealityInsightOutput = z.infer<typeof GenerateRealityInsightOutputSchema>;

export async function generateRealityInsight(input: GenerateRealityInsightInput): Promise<GenerateRealityInsightOutput> {
  return generateRealityInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRealityInsightPrompt',
  input: {schema: GenerateRealityInsightInputSchema},
  output: {schema: GenerateRealityInsightOutputSchema},
  prompt: `You are the modular intelligence engine for Mod36—a framework designed around 36 Realities shaping life on Earth. Your purpose is to generate systems-level insights and speculative design scenarios based on user-selected Realities.

The user has selected the following Realities:
{{#each selectedRealities}}
- {{{this}}}
{{/each}}

Based on these selected Realities, you must:
1. Generate a "System Insight": A brief paragraph (around 50-100 words) explaining the deep relationship and systemic dynamics between these chosen Realities. Focus on interconnections, feedback loops, and underlying patterns.
2. Generate a "Speculative Scenario / Future Design Idea": A micro-story, concept, or design provocation (around 100-150 words) that vividly illustrates how these Realities intersect. This scenario should be:
    - Culturally rich, drawing inspiration particularly from African or indigenous contexts where appropriate and respectful.
    - Future-oriented and imaginative.
    - Design-relevant, suggesting potential areas for innovation or intervention.
    - Reflective of Mod36's core values: modularity, systems thinking, cultural grounding, and imagination.
3. Generate a "Title": A concise, evocative title for the insight and scenario (e.g., "Faithful Infrastructures" or "The Media of Memory").

Adopt a tone that blends strategic design thinking with speculative storytelling. Ensure the total output is concise, ideally between 150-250 words for the insight and scenario combined.
Strictly adhere to the output schema provided.
`,
});

const generateRealityInsightFlow = ai.defineFlow(
  {
    name: 'generateRealityInsightFlow',
    inputSchema: GenerateRealityInsightInputSchema,
    outputSchema: GenerateRealityInsightOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
        throw new Error("The AI failed to generate a valid response.")
    }
    return output;
  }
);
