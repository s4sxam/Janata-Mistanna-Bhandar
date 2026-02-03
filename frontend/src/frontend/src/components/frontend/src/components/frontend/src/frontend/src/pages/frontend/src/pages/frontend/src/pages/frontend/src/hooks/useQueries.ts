import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Category } from '../backend';

export function useGetProductsByCategory(category: Category) {
  const { actor } = useActor();
  return useQuery({
    queryKey: ['products', category],
    queryFn: async () => actor ? actor.getProductsByCategory(category) : [],
    enabled: !!actor
  });
}

export function useGetAllTestimonials() {
  const { actor } = useActor();
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => actor ? actor.getAllTestimonials() : [],
    enabled: !!actor
  });
}

export function useSubmitContactInquiry() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      if (!actor) throw new Error("No actor");
      return actor.submitContactInquiry(data.name, data.email, data.phone, data.inquiry, data.isBulkOrder);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['inquiries'] })
  });
}

export function useInitializeMenu() {
  const { actor } = useActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async () => actor?.initializeMenu(),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['products'] })
  });
}
